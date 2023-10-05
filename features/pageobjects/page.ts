// Page.ts
import { browser } from '@wdio/globals';

export default class Page {
    open() {
        browser.url('https://www.facebook.com/?locale=es_LA');
    }
}
