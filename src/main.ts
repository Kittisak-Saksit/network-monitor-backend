import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import middleware from './middleware/middleware'
import { PORT } from './const/app.const'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(middleware())
  await app.listen(PORT)
}
bootstrap()
