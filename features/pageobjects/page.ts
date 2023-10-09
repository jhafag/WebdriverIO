import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
   
    /**
    * Opens a sub page of the pages
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open () {
        
        browser.url(`https://www.amazon.com/-/es/`);
    }
}
