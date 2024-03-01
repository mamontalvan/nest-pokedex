import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APIPokeResponse } from './interfaces/api-poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<APIPokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650',);
    const pokemonToInsert: CreatePokemonDto[] = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    try {
      //await Promise.all(pokemonToInsert.map((p) => this.pokemonModel.create(p)));
      await this.pokemonModel.insertMany(pokemonToInsert);
      return { status: 'Seed Executed' };
    } catch (error) {}
  }
}
