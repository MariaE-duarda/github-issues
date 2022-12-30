import { SearchAreaContainer, SearchAreaHeader } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchAreaProps {
  amountPosts: number;
  getPosts: (query?: string) => Promise<void>;
}

export function SearchArea({ amountPosts, getPosts }: SearchAreaProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <SearchAreaContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchAreaHeader>
        <h2>Publications</h2>
        <span>
          {amountPosts} {amountPosts !== 1 ? "Publications" : "Publication"}
        </span>
      </SearchAreaHeader>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchAreaContainer>
  );
}
