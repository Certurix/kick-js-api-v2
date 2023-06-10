import Client from "../client/client";
import { randomBytes } from 'crypto';
import { ENDPOINTS } from "../rest/constants";

interface Channel {
    client: Client;
    id: number;
    user_id: number;
    slug: string;
    name: string;
    playback_url?: string;
    banner_image?: string;
    chatroom: {
        id: number;
    };
    followersCount: string;
    user?: any;
}

class Channel implements Channel { 

    constructor(channel: Channel, client: Client)  {
        this.client = client;

        console.log(channel);

        this.id = channel.id;
        this.user_id = channel.user_id;
        this.name = channel.name;
        this.slug = channel.slug;
        this.playback_url = channel.playback_url;
        this.banner_image = channel.banner_image;
        this.followersCount = channel.followersCount;
    }

}

export default Channel;