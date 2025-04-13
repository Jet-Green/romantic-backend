import { Controller, Post, Body } from '@nestjs/common';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Post('/suggest-bouquet/ask-ya-gpt-lite')
  async suggestBouquet_YAGptLite(
    @Body("prompt") prompt: string
  ) {
    return this.flowersService.askYaGptLite(prompt, "пока не передаем")
  }
}
