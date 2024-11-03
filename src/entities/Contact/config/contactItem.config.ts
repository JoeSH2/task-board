import { Contact } from '@/entities/Contact/types/Contact.ts';
import GithubIcon from '@/shared/assets/img/github_logo.svg';
import PhoneIcon from '@/shared/assets/img/phone.svg';
import ProfileIcon from '@/shared/assets/img/profile.svg';
import TelegramIcon from '@/shared/assets/img/telegram_logo.svg';
import { linkContact } from '@/shared/config/link-contact.config.ts';

export const contactLink: Contact[] = [
  { icon: ProfileIcon, href: linkContact.hh, label: 'Мое резюме на hh.ru' },
  { icon: GithubIcon, href: linkContact.github, label: 'Мой github' },
  {
    icon: GithubIcon,
    href: linkContact.githubProject,
    label: 'Этот проект на github',
  },
];

export const contactData: Contact[] = [
  { icon: PhoneIcon, href: linkContact.phone, label: linkContact.phone },
  {
    icon: TelegramIcon,
    href: linkContact.telegram,
    label: '@dksspkuz',
  },
];
