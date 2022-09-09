import { APP_INITIALIZER, Provider } from "@angular/core";

function appInitializerFactory() {
    return () => {
        // Initialize your app here
    };
}

export const AppInitializerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    multi: true,
};
