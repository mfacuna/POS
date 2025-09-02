import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos/pagination.dto';


@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}


  async create(createProductDto: CreateProductDto | CreateProductDto[]) {
    try {
      if (Array.isArray(createProductDto)){
        const products = createProductDto.map(dto => this.productRepository.create(dto));
        await this.productRepository.save(products);
        return products;
      }else{
        const product = this.productRepository.create(createProductDto);
        await this.productRepository.save(product);
        return product;
      }
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return await this.productRepository.find({
      take: limit,
      skip: offset,
      // TODO relaciones
    });
  }

  async findOne(id: string) {
      const product = await this.productRepository.findOneBy({ id });
      if (!product) throw new NotFoundException(`Product with ID ${id} not found`);
      return product;
  }


  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    if (!product) throw new NotFoundException(`Product with ID ${id} not found`);
    this.productRepository.merge(product, updateProductDto);
    await this.productRepository.save(product);
    return this.findOne(id);
  }

  
  async remove(id: string) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }



  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      this.logger.error(error.detail);
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
