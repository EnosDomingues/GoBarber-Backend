import { container } from 'tsyringe';

// import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

// container.registerSingleton<IMailProvider>(
//   'mailProvider',
//   DiskStorageProvider,
// );
