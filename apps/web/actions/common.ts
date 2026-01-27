"use server";
import { revalidateTag, revalidatePath } from "next/cache";
// import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth";
import axios, { AxiosError } from "axios";
import { authOptions, CustomSession } from "../app/api/auth/[...nextauth]/options";
import { GROUP_CHAT_URL } from "@/lib/apiAuthRoutes";

export type ActionState = {
  status?: number | string;
  message?: string;
  errors?: Record<string, string | string[]>;
} | undefined;

export async function createChat(prevState: ActionState, formData: FormData) {

  const session: CustomSession | null = await getServerSession(authOptions);

  const title = formData.get("title");
  const passcode = formData.get("passcode");

  try {
    const { data } = await axios.post(GROUP_CHAT_URL, {
      user: {
        connect: {
          id: Number(session?.user?.id)
        }
      },
      title: title,
      passcode: passcode
    }, {
      headers: {
        Authorization: session?.user?.token,
      },
    });

    if (data?.message) {
      await clearCache("dashboard");
      return {
        status: 200,
        message: data?.message,
        errors: data?.errors,
      };
    }

  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return {
        status: error.code,
        message: error.response?.data.message,
        errors: error.response?.data.errors,
      };
    }
    return {
      status: 500,
      message: "Something went wrong",
      errors: [],
    };
  }
}

export async function updateChat(prevState: ActionState, formData: FormData) {

  const session: CustomSession | null = await getServerSession(authOptions);

  const title = formData.get("title");
  const passcode = formData.get("passcode");
  const id = formData.get("id");

  try {
    const { data } = await axios.put(`${GROUP_CHAT_URL}/${id}`, {
      title: title,
      passcode: passcode
    }, {
      headers: {
        Authorization: session?.user?.token,
      },
    });

    if (data?.message) {
      await clearCache("dashboard");
      return {
        status: 200,
        message: data?.message,
        errors: data?.errors,
      };
    }

  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return {
        status: error.code,
        message: error.response?.data.message,
        errors: error.response?.data.errors,
      };
    }
    return {
      status: 500,
      message: "Something went wrong",
      errors: [],
    };
  }
}

export async function clearCache(tag: string) {
  revalidatePath("/dashboard");
  revalidateTag(tag, "dashboard");
}
