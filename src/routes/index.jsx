import mainRoutes from './public/main'
import authenticationRoutes from './public/authentication'
import purchaseRoutes from './private/purchase'
import profileRoutes from './private/profile'
import adminRoutes from './private/admin'

export default [].concat(mainRoutes, authenticationRoutes, purchaseRoutes, profileRoutes, adminRoutes);