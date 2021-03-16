import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class UploadController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
      }),
    }),
  )
  async uploadMultipleFiles(@UploadedFile() file: Express.Multer.File) {
    const fileReponse = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return fileReponse;
  }
}
