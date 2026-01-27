import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatCreateWithoutGroupInputObjectSchema as ChatCreateWithoutGroupInputObjectSchema } from './ChatCreateWithoutGroupInput.schema';
import { ChatUncheckedCreateWithoutGroupInputObjectSchema as ChatUncheckedCreateWithoutGroupInputObjectSchema } from './ChatUncheckedCreateWithoutGroupInput.schema';
import { ChatCreateOrConnectWithoutGroupInputObjectSchema as ChatCreateOrConnectWithoutGroupInputObjectSchema } from './ChatCreateOrConnectWithoutGroupInput.schema';
import { ChatUpsertWithWhereUniqueWithoutGroupInputObjectSchema as ChatUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './ChatUpsertWithWhereUniqueWithoutGroupInput.schema';
import { ChatCreateManyGroupInputEnvelopeObjectSchema as ChatCreateManyGroupInputEnvelopeObjectSchema } from './ChatCreateManyGroupInputEnvelope.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './ChatWhereUniqueInput.schema';
import { ChatUpdateWithWhereUniqueWithoutGroupInputObjectSchema as ChatUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './ChatUpdateWithWhereUniqueWithoutGroupInput.schema';
import { ChatUpdateManyWithWhereWithoutGroupInputObjectSchema as ChatUpdateManyWithWhereWithoutGroupInputObjectSchema } from './ChatUpdateManyWithWhereWithoutGroupInput.schema';
import { ChatScalarWhereInputObjectSchema as ChatScalarWhereInputObjectSchema } from './ChatScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChatCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => ChatUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => ChatUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChatCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => ChatCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChatUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => ChatUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChatCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChatWhereUniqueInputObjectSchema), z.lazy(() => ChatWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChatWhereUniqueInputObjectSchema), z.lazy(() => ChatWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChatWhereUniqueInputObjectSchema), z.lazy(() => ChatWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChatWhereUniqueInputObjectSchema), z.lazy(() => ChatWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChatUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => ChatUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChatUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => ChatUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChatScalarWhereInputObjectSchema), z.lazy(() => ChatScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChatUncheckedUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.ChatUncheckedUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatUncheckedUpdateManyWithoutGroupNestedInput>;
export const ChatUncheckedUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
