import type {BreadcrumbEntry} from "./BreadcrumbEntry";

export default interface IBreadcrumbProvider {
    getBreadcrumbs(): Generator<BreadcrumbEntry>;
}