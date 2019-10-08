import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'Menu',
        title: 'Menu',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [


            {
                id: 'lista',
                title: 'Lista',
                type: 'collapsable',
                icon: 'dashboard',
                children: [
                    {
                        id: 'montanha-lista',
                        title: 'Montanhas',
                        type: 'item',
                        url: '/montanha',
                        icon: 'nature_people',
                    },
                    {
                        id: 'guia-lista',
                        title: 'Guias',
                        type: 'item',
                        url: '/guia',
                        icon: 'person_pin',
                    },
                    {
                        id: 'comentario-lista',
                        title: 'Comentarios',
                        type: 'item',
                        url: '/comentario',
                        icon: 'ballot',
                    }
                ]
            }
        ]
    }
];
