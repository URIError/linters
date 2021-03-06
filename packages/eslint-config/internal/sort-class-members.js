module.exports = {
    plugins: ['sort-class-members'],

    rules: {
        'sort-class-members/sort-class-members': [
            'error',
            {
                order: [
                    '[static-members]',
                    '[properties]',
                    '[conventional-private-properties]',
                    'constructor',
                    '[lifecycle]',
                    '[handlers]',
                    '[methods]',
                    '[conventional-private-methods]',
                    '[rendering]',
                    '[everything-else]',
                ],
                groups: {
                    'static-members': [{static: true}],
                    handlers: [
                        {name: '/^on.+$/', type: 'method'},
                        {name: '/^on.+$/', type: 'property'},
                        {name: '/^handle.+$/', type: 'method'},
                        {name: '/^handle.+$/', type: 'property'},
                    ],
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'defaultProps',
                        'getDefaultProps',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                        'componentDidCatch',
                    ],
                    rendering: ['/^render.+$/', 'render'],
                },
                accessorPairPositioning: 'getThenSet',
            },
        ],
    },
};
