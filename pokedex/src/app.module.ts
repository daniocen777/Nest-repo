import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // Importar mongoose
  imports: [PokemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
