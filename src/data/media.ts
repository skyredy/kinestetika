const B = import.meta.env.BASE_URL;

export type MediaAsset = {
  name: string;
  alt: string;
  ratio: number;
  src: string;
  srcSet: string;
  lqip: string;
};

export const media = {
  'studio-wide': {
    name: 'studio-wide',
    alt: 'Зал студии Кинестетика с реформерами',
    ratio: 0.75,
    src: `${B}media/studio-wide-1800.webp`,
    srcSet: `${B}media/studio-wide-560.webp 560w, ${B}media/studio-wide-1100.webp 1100w, ${B}media/studio-wide-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAwBQCdASoUABsAPu1iqE2ppSOiMBgMATAdiWMAxNgQ1cgBl63lt8waPGD0RhBjz0jXIAD+6NozcgggCN9bVrjsa5X6/Q2b4yxjxm0dGTvCVfm+TaKWapUD1NCG32L85EFpA9d+27zVn2XddaZa9F65kEWyt/1/ni0CzgOl6GdLgAAA',
  },
  'reformer-work': {
    name: 'reformer-work',
    alt: 'Занятие на реформере',
    ratio: 0.75,
    src: `${B}media/reformer-work-1800.webp`,
    srcSet: `${B}media/reformer-work-560.webp 560w, ${B}media/reformer-work-1100.webp 1100w, ${B}media/reformer-work-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAACQBACdASoUABsAPu1qsFAppiSiqAqpMB2JQBYj8dg1IflR+jmBFBrru9T3l4AA/XbWjNNCnhcEr5W1lfypaSi54FXsNA807Z1iEWkI9SCRWMTk3t+YSna+JXiAbwejJJtYaDMKUSb0IaqKb+qvm5SSNebwTPB/PbfOgAAA',
  },
  'studio-corner': {
    name: 'studio-corner',
    alt: 'Уголок зала с зеркалом и инвентарём',
    ratio: 0.75,
    src: `${B}media/studio-corner-1800.webp`,
    srcSet: `${B}media/studio-corner-560.webp 560w, ${B}media/studio-corner-1100.webp 1100w, ${B}media/studio-corner-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABQBQCdASoUABsAPu1mqk+ppSOiMBgIATAdiWUAvdAKYzl2wP7G4nCRHCWhoafbC41v77wA/u7nj7jh1JgNwcS/WWQvJT4f70DPTNDgsHF73ITsQoW2l5CY9JcjqalbcM60kPKY6rMLRvp2m45nqqWsur55v+7WJnYj3JrY1SNJ1loN6+3J0218eNngAA==',
  },
  'studio-angle': {
    name: 'studio-angle',
    alt: 'Зал студии, общий вид',
    ratio: 0.75,
    src: `${B}media/studio-angle-1800.webp`,
    srcSet: `${B}media/studio-angle-560.webp 560w, ${B}media/studio-angle-1100.webp 1100w, ${B}media/studio-angle-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAAAwBQCdASoUABsAPu1iqE2ppSOiMBgMATAdiWMAxNgQ1cgBl63lt8waPGD0RhBjz0jXIAD+6NozcgggCN9bVrjsa5X6/Q2b4yxjxm0dGTvCVfm+TaKWapUD1NCG32L85EFpA9d+27zVn2XddaZa9F65kEWyt/1/ni0CzgOl6GdLgAAA',
  },
  'reformers-window': {
    name: 'reformers-window',
    alt: 'Реформеры у окна',
    ratio: 0.5625,
    src: `${B}media/reformers-window-1800.webp`,
    srcSet: `${B}media/reformers-window-560.webp 560w, ${B}media/reformers-window-1100.webp 1100w, ${B}media/reformers-window-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAAAwBgCdASoUACQAPuVipk2pJaOiNVgIASAciWUAy2gWXaNiDeOOE8IZLifBn9tmAQSSoSY/+I/zxVAAAP7sr8vdwi8WtXgeE9o8h+xcf990JIrCYm1Y8R12s4sW/djJ2Lj8PWGTBi0yhdAIjJLmHFPEDzot3cjWWCZuxAQLAfTQZvGcwV9hSAAA',
  },
  'reformers-row': {
    name: 'reformers-row',
    alt: 'Ряд реформеров',
    ratio: 0.5625,
    src: `${B}media/reformers-row-1800.webp`,
    srcSet: `${B}media/reformers-row-560.webp 560w, ${B}media/reformers-row-1100.webp 1100w, ${B}media/reformers-row-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAACQBQCdASoUACQAPuFipE2opiOiNVv4ARAcCWMAxvQhTgNMem9lFDTX7zLK9+7NoH1LvOD4AAD+7K/IFv+JeVwdDmd7Go3L8ey6TJGTSKjtoWvc/vHk6E/tFB/ZcEi8RXbDE/UyAQAkorBC80wDnkJm7BbA37CFzghGKDg0t0cTdABynrdkvZAA',
  },
  'hall-mats': {
    name: 'hall-mats',
    alt: 'Групповой зал, коврики',
    ratio: 0.5625,
    src: `${B}media/hall-mats-1800.webp`,
    srcSet: `${B}media/hall-mats-560.webp 560w, ${B}media/hall-mats-1100.webp 1100w, ${B}media/hall-mats-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAACQBQCdASoUACQAPuVcpk2pJSOiOrM4ASAciWUAzFhE2ilyirHYldCnbxvmktO9xRA9UCFUAAD+9CLf687zo4bjcA5BwD/d4oMXxN92EuYC1gsRuJ0Ha3+UZrZI5rMv5AO3MiBnNANZTDaN9p/uJvDrxYRLJpbmxrVaxQ0P307y8S9Iwtu2l6R/Dqcw0vhAAAA=',
  },
  'hall-wide': {
    name: 'hall-wide',
    alt: 'Групповой зал, общий вид',
    ratio: 0.75,
    src: `${B}media/hall-wide-1100.webp`,
    srcSet: `${B}media/hall-wide-560.webp 560w, ${B}media/hall-wide-1100.webp 1100w`,
    lqip: 'data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAADwBACdASoUABsAPtFWok2oJKMiN+gBABoJQBh1hawtkWsN+h/CwtxFGOEvXGIS+AAA/unqWTWCXjCs7mTaEmzSpO5LPItMChl/x1944pVPM+vmxzWmjRP6js4H31mymLIgW8XDN1fyyLWqPqcma7hZLF1sXs77vcTirqWHgAA=',
  },
  'hall-blocks': {
    name: 'hall-blocks',
    alt: 'Групповой зал с блоками для пилатеса',
    ratio: 0.5625,
    src: `${B}media/hall-blocks-1800.webp`,
    srcSet: `${B}media/hall-blocks-560.webp 560w, ${B}media/hall-blocks-1100.webp 1100w, ${B}media/hall-blocks-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAADwBQCdASoUACQAPu1eqU6ppKOiMBVdUTAdiWUAxgQubV2ndliqNDquXDIcKujPcJwmo2ZZCWsI4AD++QyoAemC2FtCWm6089dQJe2b+G2nGatwjC4yMnrmJuqelwXG/mK4PU1mhnNvObW/ziGIXN+wtPUvcQvhA2duk5q/eYAmjGiH6jWawAAA',
  },
  'hall-aerial': {
    name: 'hall-aerial',
    alt: 'Зал с креплениями для гамаков',
    ratio: 0.75,
    src: `${B}media/hall-aerial-1800.webp`,
    srcSet: `${B}media/hall-aerial-560.webp 560w, ${B}media/hall-aerial-1100.webp 1100w, ${B}media/hall-aerial-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAABwBQCdASoUABsAPuVgpU2pJaOiMAwBIByJYwC90B6Gt+eEdyydctnLVZ30E7Kg3xSw7IXAAP7QktW5Gon/NoJuU4xGt3yl1QQmkIDasxkYBaDtVqCzEA6Y0JxYzk4xJHStpWzT9WCN5lFxdKvLJs9wI6bYJzvqYSld95T+SCLNGpaIxgc69J2B47ttEAAA',
  },
  'props-balls': {
    name: 'props-balls',
    alt: 'Мячи и утяжелители',
    ratio: 0.5625,
    src: `${B}media/props-balls-1800.webp`,
    srcSet: `${B}media/props-balls-560.webp 560w, ${B}media/props-balls-1100.webp 1100w, ${B}media/props-balls-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRn4AAABXRUJQVlA4IHIAAAAwBQCdASoUACQAPu1kqU2ppaOiNVQIATAdiWUAzuw2DU3hTS7XYarmlKVcl8rPHUVjYAD+50HEgFUZhBEi/nS3xzwVsBgh7fw2ANE/pivqGJLYrPiqrexUq6d/zBMDRrrVMWJjIv3pXboHxMetC4AAAAA=',
  },
  'props-basket': {
    name: 'props-basket',
    alt: 'Массажные мячи в корзине',
    ratio: 0.5641,
    src: `${B}media/props-basket-1100.webp`,
    srcSet: `${B}media/props-basket-560.webp 560w, ${B}media/props-basket-1100.webp 1100w`,
    lqip: 'data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAwBgCdASoUACMAPu1qrFAppiQisBVYATAdiWMswAM2AMkh8IacvWxQYO47fco9emzNw0c+myf3IBfAAP7tW5Wa2UQuVcSxeAroMsVZ5Wmgifz7CYuNNTku7ngCKYdnFfIfj6gdkD8yo7KQsnuh/EPJMtMFZYXAwfVaCLtpDXkLYJEy0FwahXkAAAA=',
  },
  'decor-roses': {
    name: 'decor-roses',
    alt: 'Букет роз и фигура на стойке',
    ratio: 0.5625,
    src: `${B}media/decor-roses-560.webp`,
    srcSet: `${B}media/decor-roses-560.webp 560w`,
    lqip: 'data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAABwBgCdASoUACQAPu1irU8ppSQiMBVaqTAdiWMAzUguboepX4/Y/un91cQpeqTrtC4bzmISFfswmdO+F0AA/uqK03kvEfTfZG/I/QUVmnb1x0Z52if52vlELy84k5SJxR0ylI140W7E+A99V1bhWWHHsKs0vVMTu0Okg0A4MUs+fs5UTT175ksEz57Z2/kAAAA=',
  },
  'decor-figure': {
    name: 'decor-figure',
    alt: 'Бронзовая фигура и карточка студии',
    ratio: 1.3333,
    src: `${B}media/decor-figure-1800.webp`,
    srcSet: `${B}media/decor-figure-560.webp 560w, ${B}media/decor-figure-1100.webp 1100w, ${B}media/decor-figure-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABwAwCdASoUAA8APu1iqU2ppaQiMAgBMB2JQAAIwxPLi6BRyyAA/udrtJzH5iRfQUOv6owfylrXoceMpgiqs7uVKFUYOi8RCOr8oDqx0b4smgAA',
  },
  'facade': {
    name: 'facade',
    alt: 'Вход в студию Кинестетика',
    ratio: 0.75,
    src: `${B}media/facade-1800.webp`,
    srcSet: `${B}media/facade-560.webp 560w, ${B}media/facade-1100.webp 1100w, ${B}media/facade-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAACwBACdASoUABsAPtlepE2oJaOiN/qoAQAbCWcAyFwbpWFH0JbVpWi9EKQs6MKgAP6NLRBoYuuxa7FMdLeqA4tfKZztnTtgTh2Pip9YS86R3+pH0zx7pZqdxHr1GH3mbViTgpVX/FaQowAA',
  },
  'anatomy': {
    name: 'anatomy',
    alt: 'Модель таза на анатомическом атласе',
    ratio: 0.75,
    src: `${B}media/anatomy-560.webp`,
    srcSet: `${B}media/anatomy-560.webp 560w`,
    lqip: 'data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAACwBACdASoUABsAPulep02pJSOiN/VYASAdCWUAvkgMVQgH3i9Ojg0ReiAhVc0AAP3pgSDf/95PV6GQSa983J6KH8McijA8tx5AgoumnUrC/bgYO+vXk8iWU1+TtQdTebAvQAbYAAA=',
  },
  'mirror-skeleton': {
    name: 'mirror-skeleton',
    alt: 'Зеркальная стена и анатомическая модель',
    ratio: 0.75,
    src: `${B}media/mirror-skeleton-1800.webp`,
    srcSet: `${B}media/mirror-skeleton-560.webp 560w, ${B}media/mirror-skeleton-1100.webp 1100w, ${B}media/mirror-skeleton-1800.webp 1800w`,
    lqip: 'data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAACQBQCdASoUABsAPuFSpU2opCOiN/qoARAcCWMAyRAeiQdNcvOGuCIr212S/OPmj/JlWSWd4AD+zfEMe6UgsEBpW+14G1jfs7sGc07HxP/B8CNXpCxfUVceW6P13PQfBbzt2gLQKk3jJlWeVY69fC/26XaPRyI9HEcxh0+ZI/4JAKKHiAA=',
  },
} satisfies Record<string, MediaAsset>;

export type MediaKey = keyof typeof media;
