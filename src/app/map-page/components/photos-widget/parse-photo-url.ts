import {Photo} from '@app/data';
import {environment} from '../../../../environments/environment';

export const getParsedUrl = (photo: Photo) => {
    const url = new URL(photo.url);
    return environment.backendUrl + url.pathname;
}
