import i18n from 'i18next';
import { LocalizationService } from './LocalizationService';

jest.mock('i18next', () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
  changeLanguage: jest.fn(),
  language: 'en',
}));

jest.mock('react-i18next', () => ({
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

jest.mock(
  'translations/en.json',
  () => ({
    greeting: 'Hello',
  }),
  { virtual: true },
);

describe('LocalizationService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize i18next with correct configuration', () => {
    LocalizationService.init();

    expect(i18n.use).toHaveBeenCalledWith(expect.anything());
    expect(i18n.init).toHaveBeenCalledWith({
      compatibilityJSON: 'v3',
      resources: {
        en: { translation: { greeting: 'Hello' } },
      },
      fallbackLng: 'en',
      lng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
  });

  it('should change language using i18next', () => {
    const newLang = 'fr';

    LocalizationService.onChangeLanguage(newLang);

    expect(i18n.changeLanguage).toHaveBeenCalledWith(newLang);
  });

  it('should get the current language', () => {
    const language = LocalizationService.getLanguage();

    expect(language).toBe('en');
  });
});
