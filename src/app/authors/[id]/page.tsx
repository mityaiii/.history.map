/* eslint-disable max-len */
import React from 'react'
import Image from 'next/image'
import { Box } from '@/app/components/boxes/box'
import { ToggleDown } from '@/app/components/toggle-down/toggle-down';
import { List } from '../components/list';

interface ILocation {
  address: string;
  dateStart: string;
  dateEnd: string;
}

interface IWorkPlace {
  title: string;
  jobTitles: string[];
  address: string;
  dateStart: string;
  dateEnd: string;
}

interface IAuthor {
  name: string;
  
  bio: string;

  birthDate: string;
  gender: string;
  national: string;
  religion: string;
  partisanship: string;
  intercourse: string;
  category: string;
  socialBackground: string[];

  education: string[];
  typeOfActivity: string[];

  locations: ILocation[];
  workPlaces: IWorkPlace[];
}

const props: IAuthor = {
  name: 'Никулин Анисим Прокопьевич',
  birthDate: '15/03/1902',
  gender: 'мужчина',
  
  national: 'Русский',
  religion: 'Атеист',
  partisanship: 'Член партии',
  intercourse: 'Женат (есть дети)',
  category: 'Рабочий и ИТР',

  socialBackground: ['рабочее/крестьянское'],

  education: ['высшее образование', 'советско-партийная школа'],
  typeOfActivity: ['партийный работник', 'профессиональный военный'],

  locations: [
    {
      'address': 'ул. Софьи Перовской, д. 14, кв. 33',
      'dateStart': '10/01/1942',
      'dateEnd': '07/04/1942',
    },
    {
      'address': 'ул. Софьи Перовской, д. 14, кв. 33',
      'dateStart': '10/01/1942',
      'dateEnd': '07/04/1942',
    },
  ],
  workPlaces: [{
    'title': 'Октябрьский райком ВКП(б)',
    'jobTitles': [
      'начальник штаба оборонительных работ Октябрьского района',
      'начальник транспортной службы Октябрьского района',
    ],
    'dateStart': '10/01/1942',
    'dateEnd': '10/04/1942',
    'address': 'ул. 3 Июля д. 55/57',
  }],

  bio: `Блокадный дневник Анисима Прокопьевича Никулина дает редкую возможность посмотреть на блокаду Ленинграда глазами партийного активиста, управленца и агитатора среднего звена.
  Анисим Никулин начал вести дневник в первую блокадную зиму, в разгар «смертного времени» — 10 января 1942 года — и закончил 7 апреля того же года. Биографические сведения об авторе скудны. Он родился в 1902 году, точное место рождения неизвестно. Автор участвовал в Гражданской войне, был «красным партизаном [в] 1918–1919 гг.» и по утверждению, сделанному в дневнике, служил в Красной армии на протяжении двадцати лет. До войны Никулин работал директором Транспортной конторы Лензаготплодоовощторга. Очевидно, что автор имел партийные амбиции: в 1920 году Никулин вступил в РКП(б), а в 1934-м окончил Военно-политическую академию им. В. И. Ленина, готовившую кадры для организационно-политической и агитационной работы в армии и флоте. Незадолго до войны Никулин получил партийный выговор за «притупления бдительности» по отношению к «врагам народа» в Военно-политической академии, однако из партии исключен не был. Этот инцидент, по мнению Никулина, стал причиной, почему с началом Великой Отечественной войны его не взяли в армию.
  С 23 августа 1941-го до января 1942 года Анисим Никулин служил начальником штаба оборонительных работ по Октябрьскому району Ленинграда. Под его руководством возводятся «сотни фортификационных сооружений». На своем посту Никулин продолжает вести агитаторскую деятельность, а также составляет инструкции о ведении уличных боев в городе и «Памятку бойцу рабочего отряда, защищающему свой город». В дневнике автор описывает уже опыт работы начальником команды по выкапыванию траншей для погребения умерших на Смоленском кладбище. С 15 января по 15 февраля 1942 года под руководством Никулина 700 рабочих Октябрьского района, мобилизованных по трудовой повинности (многие из них — женщины), в условиях 30-градусного мороза вырыли траншеи для братских могил общей протяженностью 341 метр.`,
}

export default function AuthorPage ({ id }: { id: number }) {
  return (
    <div className='pt-24 max-w-[1080px] mx-auto gap-x-8 flex'>
      <div className='w-80 flex flex-col gap-y-5 text-xs'>
        <Box className='px-2 py-8'>
          <Image
            className='w-20 h-20 rounded-full mx-auto sm:w-40 sm:h-40'
            width={100}
            height={100}
            alt='author' 
            src='/author.png'
          />
          <h3 className='text-center pt-4'>{props.name}</h3>
          <h5 className='text-center pt-1 text-neutral-500'>{props.birthDate} {props.gender}</h5>
        </Box>
        <p className='leading-5'>
          Национальность: <strong>{ props.national }</strong><br/>
          Партийность: <strong>{ props.partisanship }</strong><br/>
          Релегиозность: <strong>{ props.religion }</strong><br/>
          Отношения: <strong>{ props.intercourse }</strong><br/>
          Категория: <strong>{ props.category }</strong><br/>
        </p>
        <List header='Социальное происхождение' points={props.socialBackground}/>
        <List header='Образование' points={props.education}/>
        <List header='Тип деятельности' points={props.education}/>
        <h5 className='font-bold'></h5>
        { props.locations.map((location, indx) => <ToggleDown header={`Место жительства ${indx + 1}`} key={indx}>
          <p>{ location.address }</p>
        </ToggleDown>) }
        { props.workPlaces.map((workPlace, indx) => <ToggleDown header={`Место работы ${indx + 1}`} key={indx}>
          <></>
        </ToggleDown>) }
      </div>
      <div className='w-4/5'>
        { props.bio.split('\n').map((value, indx) => <p className='indent-6 py-2' key={indx}>{value}</p>) }
        <a className='hover:cursor-pointer'>url</a>
      </div>
    </div>
  )
};