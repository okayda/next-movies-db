"use client";

import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  filmName: z.string().min(1, {
    message: "Empty search are not valid",
  }),
});

export default function SearchBar({
  placeholder = "Search",
}: {
  placeholder: string;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filmName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const searchName = values.filmName.split(" ").join("%20");

    router.push(`/search/films/${searchName}?page=1`);
  }

  return (
    <section>
      <div className="flex items-center gap-3 md:gap-4 xl:mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-6 w-6 self-center text-white md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 22 22"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-full w-full items-center justify-between gap-3 md:gap-4"
          >
            <div className="relative w-full">
              <FormField
                control={form.control}
                name="filmName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={placeholder}
                        autoComplete="off"
                        className="h-full w-full rounded-none border-b-2 border-b-transparent bg-transparent pb-2 text-[15px] font-light tracking-wider text-[#f1f1f1] focus:border-b-2 focus:border-[#333] focus:outline-none md:text-xl lg:text-2xl"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="absolute -bottom-7 left-0 mt-0 tracking-wider text-[#FC4747]" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="rounded-md border border-[#333] bg-[#141414] px-3 py-2 text-[13px] tracking-wide text-white transition-colors hover:bg-[#212121] hover:text-[#f1f1f1] md:text-base"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
