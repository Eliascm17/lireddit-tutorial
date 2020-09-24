"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsAuth = void 0;
exports.useIsAuth = () => {
    const [{ data, fetching }] = useMeQuery();
    const router = useRouter();
    useEffect(() => {
        if (!fetching && !(data === null || data === void 0 ? void 0 : data.me)) {
            router.replace("/login");
        }
    }, [fetching, data, router]);
};
//# sourceMappingURL=useisAuth.js.map