import { createAction } from '@reduxjs/toolkit';

const setCurrentNotice = createAction('notices/setCurrentNotice');

const setNotices = createAction('notices/setNotices');

export { setCurrentNotice, setNotices };
