import type {MetadataRoute} from 'next'
import {ConstantConfig} from "@/common/config/constant.config";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${ConstantConfig.BASE_URL}/sitemap.xml`,
    }
}