import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    ProductModule,
    NodemailerModule,
    AuthModule,
  
    MongooseModule.forRoot('mongodb+srv://n4beel:aQ3HZ9EzoB9HXBv3@sandbox.mwosc.mongodb.net/spt?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
