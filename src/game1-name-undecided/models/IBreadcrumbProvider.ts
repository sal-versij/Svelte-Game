export default interface IBreadcrumbProvider {
    getBreadcrumbs(): Generator<{ name: string }>;
}