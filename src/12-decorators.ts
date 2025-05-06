// Decorators
import "reflect-metadata";

class ModalWindow {
  @MeasureTime()
  meaasureTime(period: number): number {
    return period;
  }
}

function MeasureTime() {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]): unknown {
      console.time(propertyKey);

      const result = originalMethod?.apply(this, args);

      console.timeEnd(propertyKey);

      return result;
    };
  };
}

type ServiceMetadata = {
  isSingleton: boolean;
};

type Construnctor = new (...args: any) => any;

@Service({
  isSingleton: true,
})
class UserService {}

function Service(metadata: ServiceMetadata) {
  return (constructor: Construnctor) => {
    Reflect.defineMetadata("service", metadata, constructor);
  };
}

const instanceStorage = new Map();

function isServiceMetadata(entity: unknown): entity is ServiceMetadata {
  const serviceMetadata = entity as ServiceMetadata;

  return !!serviceMetadata && typeof serviceMetadata.isSingleton === "boolean";
}

function getInstance<ServiceConstructor extends Construnctor>(
  Service: ServiceConstructor
): ServiceConstructor {
  const metadata: unknown = Reflect.getMetadata("service", Service);

  if (!isServiceMetadata(metadata)) {
    return new Service();
  }

  if (!metadata.isSingleton) {
    return new Service();
  }

  if (!instanceStorage.get(Service)) {
    instanceStorage.set(Service, new Service());
  }

  return instanceStorage.get(Service);
}

getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
getInstance(UserService);
