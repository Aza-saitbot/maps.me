import {OrderType} from "../redux/types/types";

export const mockListOrders: Array<OrderType> = [
    {
        id: 1,
        label: 'Маршрут: Респ.Татарстан - Респ.Башкортостан',
        loading: [
            {
                key: '1', label: 'Казань', coordinates: [
                    55.7823547, 49.1242266
                ]
            },
            {
                key: '2', label: 'Набережной Челны', coordinates: [
                    55.7419774, 52.399207
                ]
            },
            {
                key: '3', label: 'Альметьевск', coordinates: [
                    54.9005008, 52.2963777
                ]
            },
        ],
        uploading: [
            {
                key: '1', label: 'Уфа', coordinates: [
                    54.7261409, 55.947499
                ]
            },
            {
                key: '2', label: 'Стрелитамак', coordinates: [
                    53.632374, 55.952259
                ]
            },
            {
                key: '3', label: 'Кумертау', coordinates: [
                    52.760975, 55.796482

                ]
            }
        ]
    },
    {
        id: 2,
        label: 'Маршрут: Респ.Татарстан - Свердловская обл.',
        loading: [
            {
                key: '1', label: 'Казань', coordinates: [
                    55.7823547, 49.1242266
                ]
            },
            {
                key: '2', label: 'Набережной Челны', coordinates: [
                    55.7419774, 52.399207
                ]
            },
            {
                key: '3', label: 'Альметьевск', coordinates: [
                    54.9005008, 52.2963777
                ]
            },
        ],
        uploading: [
            {
                key: '1', label: 'Екатеринбург', coordinates: [
                    56.7881462, 60.66895779116639
                ]
            },
            {
                key: '2', label: 'Нижний Тагил', coordinates: [
                    57.905149, 59.9508466
                ]
            },
            {
                key: '3', label: 'Серов', coordinates: [
                    59.61283205, 60.603691627943704
                ]
            },
        ]

    },
    {
        id: 3,
        label: 'Маршрут: Респ.Татарстан - Пензенская обл.',
        loading: [
            {
                key: '1', label: 'Казань', coordinates: [
                    55.7823547, 49.1242266
                ]
            },
            {
                key: '2', label: 'Набережной Челны', coordinates: [
                    55.7419774, 52.399207
                ]
            },
            {
                key: '3', label: 'Альметьевск', coordinates: [
                    54.9005008, 52.2963777
                ]
            },
        ],
        uploading: [
            {
                key: '1', label: 'Пенза', coordinates: [
                    53.200001, 45
                ]
            },
            {
                key: '2', label: 'Кузнецк ', coordinates: [
                    53.112514, 46.600727
                ]
            },
            {
                key: '3', label: 'Заречный', coordinates: [
                    53.196014, 45.169273
                ]
            },
        ]

    },

]