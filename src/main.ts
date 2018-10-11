import * as Ably from 'ably';
import { platformBrowserDynamic } from 'angular-ts-decorators';
import { AppModule } from './app/app.module';

const ably = new Ably.Realtime({ key: 'foo.bar:baz' });
platformBrowserDynamic().bootstrapModule(AppModule);
