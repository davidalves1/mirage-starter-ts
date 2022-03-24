import { Model, Registry, Request } from "miragejs";
import Schema from "miragejs/orm/schema";
import { ModelDefinition } from 'miragejs/-types'

// type User = {
//   id: number
//   name: string
//   age: number
// }

// const UserModel: ModelDefinition<User[]> = Model.extend([]);

// type AppRegistry = Registry<{ users: typeof UserModel }, {}>
// type AppSchema = Schema<AppRegistry>;

export default function routes(this: any): void {
  this.namespace = 'api';

  this.get('users', schema => schema.users.all());
}
