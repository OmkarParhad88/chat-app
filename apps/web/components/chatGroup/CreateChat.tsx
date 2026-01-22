"use client";

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod/v4';
import React, { useState, useActionState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  createChatSchema,
  createChatSchemaType,
} from "@validations/chatSchema";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { toast } from "sonner";
import { createChat } from "@/actions/common";

export default function CreateChat({ user }: { user: CustomUser }) {
  const [open, setOpen] = useState(false);
  const [state, action, isPending] = useActionState(createChat, undefined);

  useEffect(() => {
    if (state?.status === 500) {
      toast.error(state.message)
      setOpen(false);
    }
    if (state?.status === 200) {
      toast.success(state?.message)
      setOpen(false);
    }
  }, [state])

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createChatSchema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Chat</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create your new Chat</DialogTitle>
        </DialogHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <div className="mt-4">
            <Input placeholder="Enter chat title" key={fields.title.key}
              name={fields.title.name}
              defaultValue={fields.title.initialValue} />
            <span className="text-red-400">{fields.title.errors}</span>
          </div>
          <div className="mt-4">
            <Input placeholder="Enter passcode" key={fields.passcode.key}
              name={fields.passcode.name}
              defaultValue={fields.passcode.initialValue} />
            <span className="text-red-400">{fields.passcode.errors}</span>
          </div>
          <div className="mt-4">
            <Button className="w-full" disabled={isPending}>
              {isPending ? "Processing.." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
