import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity'

@Injectable()
export class ProfileService {

    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>) { }

    async getProfile(_username: string, _domain: string): Promise<Profile> {
        return await this.profileRepository.findOne({
            select: ['username', 'domain', 'name', 'title', 'gender', 'phone', 'skills'],
            where: [{"username": _username, "domain": _domain}]
        })
    }
}
