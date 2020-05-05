const todayTasks = [
    {
        id: 1,
        title: '001-02-20 | Draft the new contract document',
    },
    {
        id: 2,
        title: '002-02-20 | iOS App home page',
    },
    {
        id: 3,
        title: '003-02-20 | Write a release note',
    }
];

const upcomingTasks = [
    {
        id: 4,
        title: '004-02-20 | Invite user to a project',
    },
    {
        id: 5,
        title: '005-02-20 | Enable analytics tracking',
    },
    {
        id: 6,
        title: '006-02-20 | Code HTML email template',
    }
];

const otherTasks = [
    {
        id: 7,
        title: '007-02-20 | Coordinate with business development',
    },
    {
        id: 8,
        title: '008-02-20 | Kanban board design',
    },
    {
        id: 9,
        title: '009-02-20 | Draft the new contract document for sales team',
    },
    {
        id: 10,
        title: '010-02-20 | Draft the new contract document for vendor Abc',
    }
];

const projects = [
    {
        id: 1,
        title: '011-02-20 Ubold v3.0 - Redesign',
    },
    {
        id: 2,
        title: '012-02-20 Minton v3.0 - Redesign',
    },
    {
        id: 3,
        title: '013-02-20 Hyper v2.1 - Angular and Django',
    },
    {
        id: 4,
        title: '014-02-20 Hyper v2.1 - React, Webpack',
    },
    {
        id: 5,
        title: '015-02-20 Hyper 2.2 - Vue.Js and Laravel',
    },
    {
        id: 6,
        title: '016-02-20 Hyper 2.3 - Rails, NodeJs, Mean',
    },
    {
        id: 7,
        title: '017-02-20 Hyper - Landing page and UI Kit',
    },
    {
        id: 8,
        title: '018-02-20 Hyper 3.0 - Scoping',
    },
];


const files = [
    { id: 1, name: 'sales-assets.zip', 'size': '2.3 MB' },
    { id: 2, name: 'new-contarcts.docx', 'size': '1.3 MB' }
];

const allTasks = [...todayTasks, ...upcomingTasks, ...otherTasks];

export { todayTasks, upcomingTasks, otherTasks, allTasks, projects, files };