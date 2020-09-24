"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
exports.isAuth = ({ context }, next) => {
    if (!context.req.session.userId) {
        console.log('context.req.session @isAuth:', context.req.session);
        throw new Error("not authenticated");
    }
    return next();
};
//# sourceMappingURL=isAuth.js.map