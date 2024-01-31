import { locationMock } from "./location.mock";

export const GetUnitsServiceMock = {
  getAllUnits:jest.fn(),
  getFilteredUnits: jest.fn().mockReturnValue([locationMock]),
  setFilteredUnits: jest.fn()
}
