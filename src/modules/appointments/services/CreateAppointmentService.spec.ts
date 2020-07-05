import FakeAppointmentRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentRepository);
  });

  it('Should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '999999',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('999999');
  });

  it('Should not be able to create two appointments on the same time', async () => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentRepository);

    const appoinntmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appoinntmentDate,
      provider_id: '999999',
    });

    await expect(
      createAppointment.execute({
        date: appoinntmentDate,
        provider_id: '999999',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
