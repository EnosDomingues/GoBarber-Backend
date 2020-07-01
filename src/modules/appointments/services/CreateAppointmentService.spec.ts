import FakeAppointmentRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('Should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '999999',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('999999');
  });

  // it('Should not be able to create two appointments on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
