"use client"

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod/v4';
import React, { useEffect, Dispatch, useActionState, SetStateAction } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  createChatSchema,
} from "@validations/chatSchema";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { toast } from "sonner";
import { clearCache, updateChat } from "@/actions/common";
import { GroupChatType } from "@/types";

export default function EditGroupChat({
  user,
  group,
  open,
  setOpen,
}: {
  user: CustomUser;
  group: GroupChatType;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [state, action, isPending] = useActionState(updateChat, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state?.status === 500) {
      toast.error(state.message)
      setOpen(false);
    }
    if (state?.status === 200) {
      toast.success(state?.message)
      setOpen(false);

      clearCache("dashboard");
      router.refresh();
    }
  }, [state])


  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createChatSchema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    defaultValue: {
      title: group.title,
      passcode: group.passcode,
    }
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Update group chat</DialogTitle>
        </DialogHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <div className="mt-4">
            <Input type="hidden" name="id" value={group.id} />
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
