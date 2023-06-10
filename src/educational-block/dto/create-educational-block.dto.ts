import { IWord } from "src/types/types";

export class CreateEducationalBlockDto {
  readonly name: string;
  readonly description: string;
  readonly words: IWord[];
}
