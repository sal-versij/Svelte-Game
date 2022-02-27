import type {LinkProps} from "svelte-routing/types/Link";

export type BreadcrumbEntry = LinkProps & {
    name: string;
};