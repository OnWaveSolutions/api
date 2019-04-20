const AdminController = require('../controllers/AdminController');
const ManagerController = require('../controllers/ManagerController');
const CondominiumController = require('../controllers/CondominiumController');
const routes = [
    {
        method: 'GET',
        url: '/admin',
        handler: AdminController.getAdmins
    },
    {
        method: 'GET',
        url: '/admin/:id',
        handler: AdminController.getSingleAdmin
    },
    {
        method: 'POST',
        url: '/admin',
        handler: AdminController.createAdmin
    },
    {
        method: 'PUT',
        url: '/admin/:id',
        handler: AdminController.updateAdmin
    },
    {
        method: 'DELETE',
        url: '/admin/:id',
        handler: AdminController.deleteAdmin
    },
    {
        method: 'GET',
        url: '/manager',
        handler: ManagerController.getManagers  
    },
    {
        method: 'GET',
        url: '/manager/:id',
        handler: ManagerController.getSingleManager,
    },
    {
        method: 'POST',
        url: '/manager',
        handler: ManagerController.createManager
    },
    {
        method: 'PUT',
        url: '/manager/:id',
        handler: ManagerController.updateManager
    },
    {
        method: 'DELETE',
        url: '/manager/:id',
        handler: ManagerController.deleteManager
    },
    {
        method: 'GET',
        url: '/deletealladmins',
        handler: AdminController.deleteAll
    },
    {
        method: 'GET',
        url: '/deleteallmanagers',
        handler: ManagerController.deleteAll
    },
    {
        method: 'GET',
        url: '/condominiums',
        handler: CondominiumController.getCondos
    },
    {
        method: 'GET',
        url: '/condominiums/:id',
        handler: CondominiumController.getSingleCondo
    },
    {
        method: 'POST',
        url: '/condominiums',
        handler: CondominiumController.createCondo
    },
    {
        method: 'PUT',
        url: '/condominiums/:id',
        handler: CondominiumController.updateCondo
    },
    {
        method: 'DELETE',
        url: '/condominiums/:id',
        handler: CondominiumController.deleteCondo
    },
    {
        method: 'GET',
        url: '/deleteallcondos',
        handler: CondominiumController.deleteAll
    }

]

module.exports = routes;