import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import middleware from './middleware/middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(middleware())
  await app.listen(process.env.PORT || 7000)
}
bootstrap()
