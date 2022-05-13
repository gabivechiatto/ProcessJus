import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AxiosMock from 'axios-mock-adapter';
import Form from '.';
import { api } from '../../services/api';

const apiMock = new AxiosMock(api);

describe('Form Component', () => {
  it('should render correctly', async () => {
    render(<Form />);

    const processNumber = '0004237-31.2010.8.26.0001';

    apiMock.onGet(`tribproc/${processNumber}`).reply(200);

    await expect(screen.getByRole('')).toBeInDocument();
  });
});
