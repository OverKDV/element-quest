"use strict";

// Atomic numbers and symbols follow the IUPAC periodic table (4 May 2022).
// Memory cues describe symbol shapes; they are not scientific explanations.
const ELEMENTS = Object.freeze([
  { number: 1, symbol: "H", name: "Водород", stress: "водоро́д", cue: "Две стойки и перекладина: H. Свяжи этот знак со словом «водород».", color: "blue",
    group: 1,
    period: 1,
    family: "Неметаллы",
    state: "Газ",
    examples: [
      {
        "icon": "water",
        "title": "Вода",
        "description": "В каждой молекуле воды H₂O два атома водорода связаны с одним атомом кислорода."
      },
      {
        "icon": "sun",
        "title": "Солнце",
        "description": "Водород — самый распространённый элемент Солнца и всей Вселенной."
      },
      {
        "icon": "battery",
        "title": "Топливный элемент",
        "description": "Водород H₂ используют в устройствах, которые вырабатывают электричество при реакции с кислородом."
      }
    ],
    fact: "Водород — самый лёгкий элемент. Его символ H обозначает элемент или один атом, а формула H₂ — молекулу простого вещества водорода.",
    application: {
      "question": "Сколько атомов водорода в одной молекуле воды H₂O?",
      "options": [
        "Два",
        "Один",
        "Три",
        "Ни одного"
      ],
      "answer": 0,
      "explanation": "Индекс ₂ после H означает два атома водорода. После O индекса нет: атом кислорода один."
    },
    source: "https://periodic-table.rsc.org/element/1/hydrogen"
  },
  { number: 2, symbol: "He", name: "Гелий", stress: "ге́лий", cue: "Начинается как H, но есть маленькая e. Водород и гелий легко перепутать — сравни H и He.", color: "violet",
    group: 18,
    period: 1,
    family: "Благородные газы",
    state: "Газ",
    examples: [
      {
        "icon": "balloon",
        "title": "Воздушные шары",
        "description": "Гелием наполняют шары: он менее плотный, чем воздух."
      },
      {
        "icon": "chip",
        "title": "Магниты томографа",
        "description": "Очень холодный жидкий гелий используют для охлаждения сверхпроводящих магнитов некоторых МРТ-аппаратов."
      },
      {
        "icon": "sun",
        "title": "Звёзды",
        "description": "Гелий — второй по распространённости элемент во Вселенной после водорода."
      }
    ],
    fact: "При комнатной температуре гелий — газ из отдельных атомов He. Он относится к благородным газам и крайне редко вступает в химические реакции.",
    application: {
      "question": "Почему шар, наполненный гелием, может подниматься в воздухе?",
      "options": [
        "Гелий плотнее воздуха",
        "Гелий менее плотный, чем воздух",
        "Гелий не имеет массы",
        "Любой газ легче воздуха"
      ],
      "answer": 1,
      "explanation": "При одинаковых условиях гелий легче такого же объёма воздуха. Если подъёмной силы хватает на оболочку и груз, шар поднимается."
    },
    source: "https://periodic-table.rsc.org/element/2/helium"
  },
  { number: 3, symbol: "Li", name: "Литий", stress: "ли́тий", cue: "Li похоже на начало слова «литий». Первая буква большая, вторая — маленькая.", color: "coral",
    group: 1,
    period: 2,
    family: "Щёлочные металлы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "battery",
        "title": "Аккумулятор телефона",
        "description": "В литий-ионных аккумуляторах ионы лития перемещаются между электродами при работе и зарядке."
      },
      {
        "icon": "glass",
        "title": "Стеклокерамика",
        "description": "Соединения лития используют при изготовлении специальных стёкол и стеклокерамики."
      },
      {
        "icon": "metal",
        "title": "Лёгкие сплавы",
        "description": "Добавки лития помогают получать лёгкие сплавы с алюминием для транспорта."
      }
    ],
    fact: "Литий — металл с самой низкой плотностью. В природе он встречается в составе соединений, например в минералах и солёных подземных водах.",
    application: {
      "question": "В каком устройстве движение ионов лития помогает запасать и отдавать энергию?",
      "options": [
        "В свинцово-кислотном аккумуляторе",
        "В обычном конденсаторе",
        "В литий-ионном аккумуляторе",
        "В проводе из чистой меди"
      ],
      "answer": 2,
      "explanation": "В таком аккумуляторе перенос ионов лития связан с процессами зарядки и разрядки. Это не кусочек металла, который просто «хранит ток»."
    },
    source: "https://periodic-table.rsc.org/element/3/lithium"
  },
  { number: 4, symbol: "Be", name: "Бериллий", stress: "бери́ллий", cue: "Be напоминает первые два звука слова «бериллий».", color: "mint",
    group: 2,
    period: 2,
    family: "Щёлочноземельные металлы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "earth",
        "title": "Изумруд",
        "description": "Бериллий входит в состав минерала берилла. Его драгоценные разновидности — изумруд и аквамарин."
      },
      {
        "icon": "metal",
        "title": "Точные пружины",
        "description": "Сплавы меди с бериллием применяют в пружинах и электрических контактах."
      },
      {
        "icon": "chip",
        "title": "Рентгеновские приборы",
        "description": "Тонкие бериллиевые окошки пропускают рентгеновское излучение в специальных приборах."
      }
    ],
    fact: "Бериллий — лёгкий металл. В изумруде он химически связан с другими элементами: драгоценный камень не является куском металлического бериллия.",
    application: {
      "question": "Как бериллий присутствует в изумруде?",
      "options": [
        "Как газ внутри пузырьков",
        "Как слой чистого металла",
        "Как жидкие капли",
        "В составе минерала берилла"
      ],
      "answer": 3,
      "explanation": "Изумруд — разновидность берилла, соединения бериллия, алюминия, кремния и кислорода."
    },
    source: "https://periodic-table.rsc.org/element/4/beryllium"
  },
  { number: 5, symbol: "B", name: "Бор", stress: "бор", cue: "Короткое название и одна буква: бор — B. У бериллия символ длиннее: Be.", color: "gold",
    group: 13,
    period: 2,
    family: "Полуметаллы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "glass",
        "title": "Термостойкое стекло",
        "description": "Соединения бора входят в боросиликатное стекло, из которого делают лабораторную посуду."
      },
      {
        "icon": "leaf",
        "title": "Клеточные стенки растений",
        "description": "Бор нужен растениям в небольших количествах для формирования клеточных стенок."
      },
      {
        "icon": "earth",
        "title": "Минерал бура",
        "description": "В природе бор встречается в соединениях, например в минерале буре."
      }
    ],
    fact: "Бор — твёрдый элемент, который часто относят к полуметаллам. В быту обычно встречаются его соединения, а не чистый бор.",
    application: {
      "question": "Что даёт добавление соединений бора при изготовлении боросиликатного стекла?",
      "options": [
        "Помогает сделать стекло термостойким",
        "Придаёт стеклу сильные магнитные свойства",
        "Делает стекло проводником как медь",
        "Делает стекло легкорастворимым в воде"
      ],
      "answer": 0,
      "explanation": "Оксид бора — один из компонентов боросиликатного стекла, устойчивого к нагреванию и изменениям температуры."
    },
    source: "https://periodic-table.rsc.org/element/5/boron"
  },
  { number: 6, symbol: "C", name: "Углерод", stress: "углеро́д", cue: "Для углерода запомни открытую дугу C. Название и символ звучат по-разному.", color: "coral",
    group: 14,
    period: 2,
    family: "Неметаллы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "pencil",
        "title": "Карандаш",
        "description": "След простого карандаша оставляют частицы графита — одной из форм углерода."
      },
      {
        "icon": "earth",
        "title": "Алмаз",
        "description": "Алмаз тоже состоит из углерода, но его атомы соединены иначе, чем в графите."
      },
      {
        "icon": "leaf",
        "title": "Живые организмы",
        "description": "Атомы углерода входят в состав белков, жиров, углеводов и ДНК."
      }
    ],
    fact: "Графит и алмаз — разные простые вещества одного элемента, углерода. Разное расположение и соединение атомов объясняет, почему их свойства так отличаются.",
    application: {
      "question": "Какая форма углерода оставляет след простого карандаша?",
      "options": [
        "Алмаз",
        "Графит",
        "Кварц",
        "Поваренная соль"
      ],
      "answer": 1,
      "explanation": "Графит мягкий: его частицы остаются на бумаге. Алмаз тоже углерод, но для карандашного грифеля его не используют."
    },
    source: "https://periodic-table.rsc.org/element/6/carbon"
  },
  { number: 7, symbol: "N", name: "Азот", stress: "азо́т", cue: "Азот — N. Представь две стойки, соединённые диагональю.", color: "violet",
    group: 15,
    period: 2,
    family: "Неметаллы",
    state: "Газ",
    examples: [
      {
        "icon": "air",
        "title": "Воздух",
        "description": "Около 78% объёма сухого воздуха составляет азот N₂."
      },
      {
        "icon": "leaf",
        "title": "Питание растений",
        "description": "Растения получают азот главным образом из соединений, например нитратов и солей аммония."
      },
      {
        "icon": "air",
        "title": "Упаковка продуктов",
        "description": "Газообразный азот используют в защитной атмосфере некоторых пищевых упаковок."
      }
    ],
    fact: "Атомы азота входят в состав аминокислот — строительных блоков белков. Азот N₂ из воздуха и соединения азота в пище — разные вещества.",
    application: {
      "question": "Какой газ составляет примерно 78% объёма сухого воздуха?",
      "options": [
        "Кислород O₂",
        "Углекислый газ CO₂",
        "Азот N₂",
        "Гелий He"
      ],
      "answer": 2,
      "explanation": "Главный газ сухого воздуха — азот N₂. Доля кислорода O₂ составляет примерно 21%."
    },
    source: "https://periodic-table.rsc.org/element/7/nitrogen"
  },
  { number: 8, symbol: "O", name: "Кислород", stress: "кислоро́д", cue: "Кислород — O. Замкнутый круг, одна буква.", color: "blue",
    group: 16,
    period: 2,
    family: "Неметаллы",
    state: "Газ",
    examples: [
      {
        "icon": "air",
        "title": "Воздух для дыхания",
        "description": "В сухом воздухе около 21% кислорода O₂. Человек использует его при клеточном дыхании."
      },
      {
        "icon": "water",
        "title": "Вода",
        "description": "Вода содержит атомы кислорода в составе молекул H₂O; это не то же самое, что растворённый газ O₂."
      },
      {
        "icon": "metal",
        "title": "Производство стали",
        "description": "Газообразный кислород используют при промышленном производстве стали."
      }
    ],
    fact: "Символ O обозначает элемент кислород, а O₂ — молекулу кислородного газа. Кислород нужен для дыхания человека и многих других организмов, но не всех форм жизни.",
    application: {
      "question": "Какая запись обозначает молекулу кислородного газа из воздуха?",
      "options": [
        "O",
        "H₂O",
        "CO₂",
        "O₂"
      ],
      "answer": 3,
      "explanation": "Молекула O₂ состоит из двух атомов кислорода. В H₂O и CO₂ кислород связан с атомами других элементов."
    },
    source: "https://periodic-table.rsc.org/element/8/oxygen"
  },
  { number: 9, symbol: "F", name: "Фтор", stress: "фтор", cue: "Фтор — F. В названии и символе слышится один и тот же первый звук.", color: "mint",
    group: 17,
    period: 2,
    family: "Галогены",
    state: "Газ",
    examples: [
      {
        "icon": "bone",
        "title": "Зубная паста",
        "description": "В некоторых зубных пастах есть фториды — соединения фтора, помогающие защищать эмаль."
      },
      {
        "icon": "glass",
        "title": "Антипригарное покрытие",
        "description": "В состав полимера ПТФЭ, известного как тефлон, входят углерод и фтор."
      },
      {
        "icon": "earth",
        "title": "Флюорит",
        "description": "Минерал флюорит — фторид кальция CaF₂, соединение кальция и фтора."
      }
    ],
    fact: "Газообразный фтор F₂ и фториды в зубной пасте — разные вещества с разными свойствами. Фтор в природных минералах химически связан с другими элементами.",
    application: {
      "question": "В какой форме фтор используют в некоторых зубных пастах?",
      "options": [
        "В виде фторидов",
        "В виде пузырьков газа F₂",
        "В виде чистого металла",
        "В виде алмаза"
      ],
      "answer": 0,
      "explanation": "В пасты добавляют определённые соединения — фториды. Газообразный фтор F₂ для этого не используют."
    },
    source: "https://periodic-table.rsc.org/element/9/fluorine"
  },
  { number: 10, symbol: "Ne", name: "Неон", stress: "нео́н", cue: "Ne похоже на начало слова «неон». Не забудь маленькую e: N — это азот.", color: "gold",
    group: 18,
    period: 2,
    family: "Благородные газы",
    state: "Газ",
    examples: [
      {
        "icon": "lamp",
        "title": "Светящиеся вывески",
        "description": "В газоразрядной трубке неон даёт красно-оранжевое свечение."
      },
      {
        "icon": "chip",
        "title": "Индикаторная лампа",
        "description": "Неон применяют в небольших газоразрядных лампах-индикаторах."
      },
      {
        "icon": "air",
        "title": "Небольшая примесь в воздухе",
        "description": "Неон есть в атмосфере в очень малом количестве; его получают при разделении жидкого воздуха."
      }
    ],
    fact: "Неон — благородный газ. Не всякая «неоновая» вывеска содержит неон: для других цветов используют другие газы, покрытия или светодиоды.",
    application: {
      "question": "Какой цвет даёт чистый неон в газоразрядной трубке?",
      "options": [
        "Зелёный",
        "Красно-оранжевый",
        "Синий",
        "Фиолетовый"
      ],
      "answer": 1,
      "explanation": "Чистый неон даёт характерный красно-оранжевый свет. Другие цвета вывесок не доказывают наличие неона."
    },
    source: "https://periodic-table.rsc.org/element/10/neon"
  },
  { number: 11, symbol: "Na", name: "Натрий", stress: "на́трий", cue: "Na напоминает начало слова «натрий». Сравни N, Ne и Na — это три разных элемента.", color: "coral",
    group: 1,
    period: 3,
    family: "Щёлочные металлы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "salt",
        "title": "Поваренная соль",
        "description": "Хлорид натрия NaCl состоит из ионов натрия и хлорида, а не из кусочков металла и газа."
      },
      {
        "icon": "water",
        "title": "Морская вода",
        "description": "В морской воде много растворённых ионов натрия, входивших в состав солей."
      },
      {
        "icon": "chip",
        "title": "Сигналы нервных клеток",
        "description": "Ионы натрия участвуют в передаче нервных сигналов и поддержании водного баланса."
      }
    ],
    fact: "Натрий как простое вещество — металл. В пище и морской воде он присутствует в соединениях и в виде ионов; свойства металлического натрия им не приписывают.",
    application: {
      "question": "Как натрий присутствует в кристалле поваренной соли NaCl?",
      "options": [
        "В виде нейтральных атомов металла",
        "В виде молекул Na₂",
        "В виде положительных ионов",
        "В виде отрицательных ионов"
      ],
      "answer": 2,
      "explanation": "Кристалл NaCl образован положительными ионами натрия Na⁺ и отрицательными ионами хлорида Cl⁻."
    },
    source: "https://periodic-table.rsc.org/element/11/sodium"
  },
  { number: 12, symbol: "Mg", name: "Магний", stress: "ма́гний", cue: "Mg: большая M и маленькая g. Свяжи эти две буквы со словом «магний».", color: "mint",
    group: 2,
    period: 3,
    family: "Щёлочноземельные металлы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "leaf",
        "title": "Зелёный лист",
        "description": "Магний входит в состав хлорофилла — пигмента, который помогает растениям улавливать свет."
      },
      {
        "icon": "metal",
        "title": "Лёгкие корпуса",
        "description": "Магниевые сплавы используют в лёгких деталях техники и транспорта."
      },
      {
        "icon": "earth",
        "title": "Доломит",
        "description": "Минерал доломит содержит магний и кальций в составе карбоната."
      }
    ],
    fact: "Магний встречается и в лёгких металлических сплавах, и в соединениях внутри живых клеток. В центре молекулы хлорофилла находится ион магния.",
    application: {
      "question": "В состав какого зелёного пигмента входит магний?",
      "options": [
        "Графита",
        "Поваренной соли",
        "Кварца",
        "Хлорофилла"
      ],
      "answer": 3,
      "explanation": "Хлорофилл содержит магний и поглощает свет, необходимый растениям для фотосинтеза."
    },
    source: "https://periodic-table.rsc.org/element/12/magnesium"
  },
  { number: 13, symbol: "Al", name: "Алюминий", stress: "алюми́ний", cue: "Al похоже на начало слова «алюминий». Вторая буква — маленькая латинская l.", color: "blue",
    group: 13,
    period: 3,
    family: "Металлы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "metal",
        "title": "Кухонная фольга",
        "description": "Алюминий можно прокатать в очень тонкие листы — фольгу."
      },
      {
        "icon": "air",
        "title": "Самолёт",
        "description": "Лёгкие и прочные алюминиевые сплавы используют в деталях самолётов."
      },
      {
        "icon": "lamp",
        "title": "Линии электропередачи",
        "description": "Алюминий хорошо проводит электрический ток и применяется в проводах."
      }
    ],
    fact: "Алюминий — лёгкий металл. Для прочных деталей его часто соединяют с другими металлами в сплавах, а для упаковки используют способность образовывать тонкую фольгу.",
    application: {
      "question": "Почему алюминиевые сплавы подходят для деталей самолёта?",
      "options": [
        "Они сочетают малую массу и прочность",
        "Они не проводят тепло",
        "Они тяжелее стали",
        "Они совсем не окисляются"
      ],
      "answer": 0,
      "explanation": "Небольшая плотность помогает уменьшить массу самолёта, а добавки других элементов повышают прочность сплава."
    },
    source: "https://periodic-table.rsc.org/element/13/aluminium"
  },
  { number: 14, symbol: "Si", name: "Кремний", stress: "кре́мний", cue: "Кремний — Si. Эта пара не угадывается по русскому названию: запомни её отдельно.", color: "gold",
    group: 14,
    period: 3,
    family: "Полуметаллы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "chip",
        "title": "Компьютерный чип",
        "description": "Очень чистый кремний используют как полупроводниковый материал в микросхемах."
      },
      {
        "icon": "earth",
        "title": "Кварц",
        "description": "Кварц — диоксид кремния SiO₂. Это соединение, а не чистый кремний."
      },
      {
        "icon": "glass",
        "title": "Стекло",
        "description": "Кварцевый песок — важное сырьё для изготовления обычного стекла."
      }
    ],
    fact: "Кремний в микросхеме, кварц и силиконовый герметик — разные материалы. Кварц содержит соединение SiO₂, а силиконы — полимеры с кремнием и кислородом в цепях.",
    application: {
      "question": "Какую роль играет очень чистый кремний в микросхемах?",
      "options": [
        "Работает как обычный металлический проводник",
        "Работает как полупроводник",
        "Является источником электропитания",
        "Работает как постоянный магнит"
      ],
      "answer": 1,
      "explanation": "Электрическими свойствами кремния можно управлять, поэтому из него делают полупроводниковые элементы микросхем."
    },
    source: "https://periodic-table.rsc.org/element/14/silicon"
  },
  { number: 15, symbol: "P", name: "Фосфор", stress: "фо́сфор", cue: "Фосфор — латинская P. По форме она похожа на русскую «Р», но в символе используется латиница.", color: "violet",
    group: 15,
    period: 3,
    family: "Неметаллы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "bone",
        "title": "Кости и зубы",
        "description": "Фосфор входит в фосфаты кальция, составляющие минеральную основу костей и зубов."
      },
      {
        "icon": "leaf",
        "title": "Удобрения",
        "description": "Фосфатные удобрения снабжают растения необходимым им фосфором."
      },
      {
        "icon": "chip",
        "title": "ДНК",
        "description": "Фосфатные группы входят в состав цепей ДНК — молекул, хранящих наследственную информацию."
      }
    ],
    fact: "В живых организмах фосфор содержится в соединениях, например фосфатах. Кости содержат соединения фосфора, а не простое вещество фосфор.",
    application: {
      "question": "В каких соединениях фосфор входит в минеральную основу костей?",
      "options": [
        "В хлоридах натрия",
        "В оксидах кремния",
        "В фосфатах кальция",
        "В молекулах азота N₂"
      ],
      "answer": 2,
      "explanation": "Фосфаты кальция содержат и кальций, и фосфор. Они придают костям и зубам твёрдость."
    },
    source: "https://periodic-table.rsc.org/element/15/phosphorus"
  },
  { number: 16, symbol: "S", name: "Сера", stress: "се́ра", cue: "Сера — S. Представь плавную линию с двумя изгибами.", color: "gold",
    group: 16,
    period: 3,
    family: "Неметаллы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "metal",
        "title": "Резина",
        "description": "Сера участвует в вулканизации — обработке, которая улучшает свойства резины."
      },
      {
        "icon": "leaf",
        "title": "Белки",
        "description": "Сера входит в состав некоторых аминокислот, из которых построены белки."
      },
      {
        "icon": "earth",
        "title": "Гипс",
        "description": "Минерал гипс содержит серу в составе сульфата кальция."
      }
    ],
    fact: "Простое вещество сера обычно выглядит как жёлтые кристаллы. В белках и гипсе сера химически связана с другими элементами и образует другие вещества.",
    application: {
      "question": "Для чего серу используют при вулканизации резины?",
      "options": [
        "Чтобы убрать все связи между цепями",
        "Чтобы сделать её растворимой в воде",
        "Чтобы сделать её жидкой при комнатной температуре",
        "Чтобы улучшить её прочность и упругость"
      ],
      "answer": 3,
      "explanation": "Связи с участием серы соединяют полимерные цепи и помогают получить более прочную и упругую резину."
    },
    source: "https://periodic-table.rsc.org/element/16/sulfur"
  },
  { number: 17, symbol: "Cl", name: "Хлор", stress: "хлор", cue: "Хлор — Cl: большая C и маленькая l. Одна C без второй буквы означает углерод.", color: "mint",
    group: 17,
    period: 3,
    family: "Галогены",
    state: "Газ",
    examples: [
      {
        "icon": "salt",
        "title": "Поваренная соль",
        "description": "Хлор входит в NaCl в виде ионов хлорида Cl⁻; хлорного газа в кристалле соли нет."
      },
      {
        "icon": "water",
        "title": "Подготовка воды",
        "description": "Хлорсодержащие средства используют на водоочистных станциях для обеззараживания воды."
      },
      {
        "icon": "glass",
        "title": "Оконная рама",
        "description": "Хлор входит в состав поливинилхлорида — пластика ПВХ, из которого делают некоторые оконные рамы."
      }
    ],
    fact: "Простое вещество хлор состоит из молекул Cl₂. Хлориды в соли и полимер ПВХ — соединения с другими свойствами; их нельзя считать хлорным газом.",
    application: {
      "question": "В какой форме хлор находится в поваренной соли NaCl?",
      "options": [
        "В виде ионов хлорида Cl⁻",
        "В виде пузырьков Cl₂",
        "В виде металлических пластинок",
        "В виде молекул O₂"
      ],
      "answer": 0,
      "explanation": "В соли отрицательно заряженные ионы хлорида соединены в кристалл с положительными ионами натрия."
    },
    source: "https://periodic-table.rsc.org/element/17/chlorine"
  },
  { number: 18, symbol: "Ar", name: "Аргон", stress: "арго́н", cue: "Ar похоже на первые два звука слова «аргон».", color: "violet",
    group: 18,
    period: 3,
    family: "Благородные газы",
    state: "Газ",
    examples: [
      {
        "icon": "air",
        "title": "Воздух",
        "description": "Аргон — один из газов атмосферы; его доля по объёму составляет около 1%."
      },
      {
        "icon": "glass",
        "title": "Стеклопакет",
        "description": "Аргоном заполняют пространство между стёклами некоторых окон для уменьшения потерь тепла."
      },
      {
        "icon": "metal",
        "title": "Защита при сварке",
        "description": "Аргон создаёт вокруг места сварки защитную газовую среду."
      }
    ],
    fact: "Аргон относится к благородным газам и очень слабо вступает в химические реакции. Поэтому его используют там, где нужно защитить материал от взаимодействия с воздухом.",
    application: {
      "question": "Зачем аргон подают к месту сварки металла?",
      "options": [
        "Чтобы усилить окисление металла",
        "Чтобы создать защитную газовую среду",
        "Чтобы превратить сталь в чистое железо",
        "Чтобы подать к металлу больше кислорода"
      ],
      "answer": 1,
      "explanation": "Аргон вытесняет воздух из зоны сварки и помогает защитить нагретый металл от окисления."
    },
    source: "https://periodic-table.rsc.org/element/18/argon"
  },
  { number: 19, symbol: "K", name: "Калий", stress: "ка́лий", cue: "Калий — K. Одна буква, как первый звук названия.", color: "coral",
    group: 1,
    period: 4,
    family: "Щёлочные металлы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "leaf",
        "title": "Питание растений",
        "description": "Калийные удобрения содержат соединения калия, необходимые для роста растений."
      },
      {
        "icon": "bone",
        "title": "Живые клетки",
        "description": "Ионы калия участвуют в поддержании водного и ионного баланса клеток."
      },
      {
        "icon": "glass",
        "title": "Специальное стекло",
        "description": "Карбонат калия используют при производстве некоторых видов стекла."
      }
    ],
    fact: "В картофеле, орехах и других продуктах калий находится в виде ионов и соединений. Чистый калий — металл, но металлических кусочков в такой пище нет.",
    application: {
      "question": "В какой форме калий поступает к растениям из калийных удобрений?",
      "options": [
        "Как кусочки чистого металла",
        "Как нейтральные молекулы K₂",
        "Как ионы из соединений калия",
        "Как атомы калия без взаимодействия с водой"
      ],
      "answer": 2,
      "explanation": "Удобрения содержат соли калия. При растворении они дают ионы калия, которые могут поглощать корни."
    },
    source: "https://periodic-table.rsc.org/element/19/potassium"
  },
  { number: 20, symbol: "Ca", name: "Кальций", stress: "ка́льций", cue: "Кальций — Ca. Сравни C, Cl и Ca: маленькая вторая буква меняет элемент.", color: "blue",
    group: 2,
    period: 4,
    family: "Щёлочноземельные металлы",
    state: "Твёрдое вещество",
    examples: [
      {
        "icon": "bone",
        "title": "Кости и зубы",
        "description": "Фосфаты кальция входят в минеральную основу костей и зубов."
      },
      {
        "icon": "earth",
        "title": "Известняк",
        "description": "Известняк в основном состоит из карбоната кальция CaCO₃."
      },
      {
        "icon": "glass",
        "title": "Строительный гипс",
        "description": "Гипсовые материалы получают из соединения кальция — сульфата кальция."
      }
    ],
    fact: "Кальций как простое вещество — металл. В костях, известняке и гипсе он находится в соединениях, свойства которых отличаются от свойств металла.",
    application: {
      "question": "Какое соединение составляет основную часть известняка?",
      "options": [
        "Хлорид натрия NaCl",
        "Диоксид кремния SiO₂",
        "Углекислый газ CO₂",
        "Карбонат кальция CaCO₃"
      ],
      "answer": 3,
      "explanation": "Главный компонент известняка — карбонат кальция. Это твёрдое соединение кальция, углерода и кислорода."
    },
    source: "https://periodic-table.rsc.org/element/20/calcium"
  }
]);

// Complete reference catalog; the first chapter retains its enriched learning cards.
const PERIODIC_ELEMENTS = Object.freeze([{"number":1,"symbol":"H","name":"Водород","period":1,"group":1,"series":"main","family":"Неметаллы"},{"number":2,"symbol":"He","name":"Гелий","period":1,"group":18,"series":"main","family":"Благородные газы"},{"number":3,"symbol":"Li","name":"Литий","period":2,"group":1,"series":"main","family":"Щёлочные металлы"},{"number":4,"symbol":"Be","name":"Бериллий","period":2,"group":2,"series":"main","family":"Щёлочноземельные металлы"},{"number":5,"symbol":"B","name":"Бор","period":2,"group":13,"series":"main","family":"Полуметаллы"},{"number":6,"symbol":"C","name":"Углерод","period":2,"group":14,"series":"main","family":"Неметаллы"},{"number":7,"symbol":"N","name":"Азот","period":2,"group":15,"series":"main","family":"Неметаллы"},{"number":8,"symbol":"O","name":"Кислород","period":2,"group":16,"series":"main","family":"Неметаллы"},{"number":9,"symbol":"F","name":"Фтор","period":2,"group":17,"series":"main","family":"Галогены"},{"number":10,"symbol":"Ne","name":"Неон","period":2,"group":18,"series":"main","family":"Благородные газы"},{"number":11,"symbol":"Na","name":"Натрий","period":3,"group":1,"series":"main","family":"Щёлочные металлы"},{"number":12,"symbol":"Mg","name":"Магний","period":3,"group":2,"series":"main","family":"Щёлочноземельные металлы"},{"number":13,"symbol":"Al","name":"Алюминий","period":3,"group":13,"series":"main","family":"Металлы"},{"number":14,"symbol":"Si","name":"Кремний","period":3,"group":14,"series":"main","family":"Полуметаллы"},{"number":15,"symbol":"P","name":"Фосфор","period":3,"group":15,"series":"main","family":"Неметаллы"},{"number":16,"symbol":"S","name":"Сера","period":3,"group":16,"series":"main","family":"Неметаллы"},{"number":17,"symbol":"Cl","name":"Хлор","period":3,"group":17,"series":"main","family":"Галогены"},{"number":18,"symbol":"Ar","name":"Аргон","period":3,"group":18,"series":"main","family":"Благородные газы"},{"number":19,"symbol":"K","name":"Калий","period":4,"group":1,"series":"main","family":"Щёлочные металлы"},{"number":20,"symbol":"Ca","name":"Кальций","period":4,"group":2,"series":"main","family":"Щёлочноземельные металлы"},{"number":21,"symbol":"Sc","name":"Скандий","period":4,"group":3,"series":"main","family":"Переходные металлы"},{"number":22,"symbol":"Ti","name":"Титан","period":4,"group":4,"series":"main","family":"Переходные металлы"},{"number":23,"symbol":"V","name":"Ванадий","period":4,"group":5,"series":"main","family":"Переходные металлы"},{"number":24,"symbol":"Cr","name":"Хром","period":4,"group":6,"series":"main","family":"Переходные металлы"},{"number":25,"symbol":"Mn","name":"Марганец","period":4,"group":7,"series":"main","family":"Переходные металлы"},{"number":26,"symbol":"Fe","name":"Железо","period":4,"group":8,"series":"main","family":"Переходные металлы"},{"number":27,"symbol":"Co","name":"Кобальт","period":4,"group":9,"series":"main","family":"Переходные металлы"},{"number":28,"symbol":"Ni","name":"Никель","period":4,"group":10,"series":"main","family":"Переходные металлы"},{"number":29,"symbol":"Cu","name":"Медь","period":4,"group":11,"series":"main","family":"Переходные металлы"},{"number":30,"symbol":"Zn","name":"Цинк","period":4,"group":12,"series":"main","family":"Металлы"},{"number":31,"symbol":"Ga","name":"Галлий","period":4,"group":13,"series":"main","family":"Металлы"},{"number":32,"symbol":"Ge","name":"Германий","period":4,"group":14,"series":"main","family":"Полуметаллы"},{"number":33,"symbol":"As","name":"Мышьяк","period":4,"group":15,"series":"main","family":"Полуметаллы"},{"number":34,"symbol":"Se","name":"Селен","period":4,"group":16,"series":"main","family":"Неметаллы"},{"number":35,"symbol":"Br","name":"Бром","period":4,"group":17,"series":"main","family":"Галогены"},{"number":36,"symbol":"Kr","name":"Криптон","period":4,"group":18,"series":"main","family":"Благородные газы"},{"number":37,"symbol":"Rb","name":"Рубидий","period":5,"group":1,"series":"main","family":"Щёлочные металлы"},{"number":38,"symbol":"Sr","name":"Стронций","period":5,"group":2,"series":"main","family":"Щёлочноземельные металлы"},{"number":39,"symbol":"Y","name":"Иттрий","period":5,"group":3,"series":"main","family":"Переходные металлы"},{"number":40,"symbol":"Zr","name":"Цирконий","period":5,"group":4,"series":"main","family":"Переходные металлы"},{"number":41,"symbol":"Nb","name":"Ниобий","period":5,"group":5,"series":"main","family":"Переходные металлы"},{"number":42,"symbol":"Mo","name":"Молибден","period":5,"group":6,"series":"main","family":"Переходные металлы"},{"number":43,"symbol":"Tc","name":"Технеций","period":5,"group":7,"series":"main","family":"Переходные металлы"},{"number":44,"symbol":"Ru","name":"Рутений","period":5,"group":8,"series":"main","family":"Переходные металлы"},{"number":45,"symbol":"Rh","name":"Родий","period":5,"group":9,"series":"main","family":"Переходные металлы"},{"number":46,"symbol":"Pd","name":"Палладий","period":5,"group":10,"series":"main","family":"Переходные металлы"},{"number":47,"symbol":"Ag","name":"Серебро","period":5,"group":11,"series":"main","family":"Переходные металлы"},{"number":48,"symbol":"Cd","name":"Кадмий","period":5,"group":12,"series":"main","family":"Металлы"},{"number":49,"symbol":"In","name":"Индий","period":5,"group":13,"series":"main","family":"Металлы"},{"number":50,"symbol":"Sn","name":"Олово","period":5,"group":14,"series":"main","family":"Металлы"},{"number":51,"symbol":"Sb","name":"Сурьма","period":5,"group":15,"series":"main","family":"Полуметаллы"},{"number":52,"symbol":"Te","name":"Теллур","period":5,"group":16,"series":"main","family":"Полуметаллы"},{"number":53,"symbol":"I","name":"Иод","period":5,"group":17,"series":"main","family":"Галогены"},{"number":54,"symbol":"Xe","name":"Ксенон","period":5,"group":18,"series":"main","family":"Благородные газы"},{"number":55,"symbol":"Cs","name":"Цезий","period":6,"group":1,"series":"main","family":"Щёлочные металлы"},{"number":56,"symbol":"Ba","name":"Барий","period":6,"group":2,"series":"main","family":"Щёлочноземельные металлы"},{"number":57,"symbol":"La","name":"Лантан","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":58,"symbol":"Ce","name":"Церий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":59,"symbol":"Pr","name":"Празеодим","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":60,"symbol":"Nd","name":"Неодим","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":61,"symbol":"Pm","name":"Прометий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":62,"symbol":"Sm","name":"Самарий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":63,"symbol":"Eu","name":"Европий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":64,"symbol":"Gd","name":"Гадолиний","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":65,"symbol":"Tb","name":"Тербий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":66,"symbol":"Dy","name":"Диспрозий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":67,"symbol":"Ho","name":"Гольмий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":68,"symbol":"Er","name":"Эрбий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":69,"symbol":"Tm","name":"Тулий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":70,"symbol":"Yb","name":"Иттербий","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":71,"symbol":"Lu","name":"Лютеций","period":6,"group":null,"series":"lanthanide","family":"Лантаноиды"},{"number":72,"symbol":"Hf","name":"Гафний","period":6,"group":4,"series":"main","family":"Переходные металлы"},{"number":73,"symbol":"Ta","name":"Тантал","period":6,"group":5,"series":"main","family":"Переходные металлы"},{"number":74,"symbol":"W","name":"Вольфрам","period":6,"group":6,"series":"main","family":"Переходные металлы"},{"number":75,"symbol":"Re","name":"Рений","period":6,"group":7,"series":"main","family":"Переходные металлы"},{"number":76,"symbol":"Os","name":"Осмий","period":6,"group":8,"series":"main","family":"Переходные металлы"},{"number":77,"symbol":"Ir","name":"Иридий","period":6,"group":9,"series":"main","family":"Переходные металлы"},{"number":78,"symbol":"Pt","name":"Платина","period":6,"group":10,"series":"main","family":"Переходные металлы"},{"number":79,"symbol":"Au","name":"Золото","period":6,"group":11,"series":"main","family":"Переходные металлы"},{"number":80,"symbol":"Hg","name":"Ртуть","period":6,"group":12,"series":"main","family":"Металлы"},{"number":81,"symbol":"Tl","name":"Таллий","period":6,"group":13,"series":"main","family":"Металлы"},{"number":82,"symbol":"Pb","name":"Свинец","period":6,"group":14,"series":"main","family":"Металлы"},{"number":83,"symbol":"Bi","name":"Висмут","period":6,"group":15,"series":"main","family":"Металлы"},{"number":84,"symbol":"Po","name":"Полоний","period":6,"group":16,"series":"main","family":"Металлы"},{"number":85,"symbol":"At","name":"Астат","period":6,"group":17,"series":"main","family":"Галогены"},{"number":86,"symbol":"Rn","name":"Радон","period":6,"group":18,"series":"main","family":"Благородные газы"},{"number":87,"symbol":"Fr","name":"Франций","period":7,"group":1,"series":"main","family":"Щёлочные металлы"},{"number":88,"symbol":"Ra","name":"Радий","period":7,"group":2,"series":"main","family":"Щёлочноземельные металлы"},{"number":89,"symbol":"Ac","name":"Актиний","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":90,"symbol":"Th","name":"Торий","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":91,"symbol":"Pa","name":"Протактиний","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":92,"symbol":"U","name":"Уран","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":93,"symbol":"Np","name":"Нептуний","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":94,"symbol":"Pu","name":"Плутоний","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":95,"symbol":"Am","name":"Америций","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":96,"symbol":"Cm","name":"Кюрий","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":97,"symbol":"Bk","name":"Берклий","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":98,"symbol":"Cf","name":"Калифорний","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":99,"symbol":"Es","name":"Эйнштейний","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":100,"symbol":"Fm","name":"Фермий","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":101,"symbol":"Md","name":"Менделевий","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":102,"symbol":"No","name":"Нобелий","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":103,"symbol":"Lr","name":"Лоуренсий","period":7,"group":null,"series":"actinide","family":"Актиноиды"},{"number":104,"symbol":"Rf","name":"Резерфордий","period":7,"group":4,"series":"main","family":"Переходные металлы"},{"number":105,"symbol":"Db","name":"Дубний","period":7,"group":5,"series":"main","family":"Переходные металлы"},{"number":106,"symbol":"Sg","name":"Сиборгий","period":7,"group":6,"series":"main","family":"Переходные металлы"},{"number":107,"symbol":"Bh","name":"Борий","period":7,"group":7,"series":"main","family":"Переходные металлы"},{"number":108,"symbol":"Hs","name":"Хассий","period":7,"group":8,"series":"main","family":"Переходные металлы"},{"number":109,"symbol":"Mt","name":"Мейтнерий","period":7,"group":9,"series":"main","family":"Переходные металлы"},{"number":110,"symbol":"Ds","name":"Дармштадтий","period":7,"group":10,"series":"main","family":"Переходные металлы"},{"number":111,"symbol":"Rg","name":"Рентгений","period":7,"group":11,"series":"main","family":"Переходные металлы"},{"number":112,"symbol":"Cn","name":"Коперниций","period":7,"group":12,"series":"main","family":"Металлы"},{"number":113,"symbol":"Nh","name":"Нихоний","period":7,"group":13,"series":"main","family":"Металлы"},{"number":114,"symbol":"Fl","name":"Флеровий","period":7,"group":14,"series":"main","family":"Металлы"},{"number":115,"symbol":"Mc","name":"Московий","period":7,"group":15,"series":"main","family":"Металлы"},{"number":116,"symbol":"Lv","name":"Ливерморий","period":7,"group":16,"series":"main","family":"Металлы"},{"number":117,"symbol":"Ts","name":"Теннессин","period":7,"group":17,"series":"main","family":"Галогены"},{"number":118,"symbol":"Og","name":"Оганесон","period":7,"group":18,"series":"main","family":"Благородные газы"}].map(entry => ({...entry, ...(ELEMENTS.find(element => element.number === entry.number) || {})})));
