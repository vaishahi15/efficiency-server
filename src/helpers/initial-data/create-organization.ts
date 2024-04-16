import { Organization } from "@sql-models";

export const createOrganization = async () => {
    const organization = await Organization.findOne({ where: { orgId: 224 } });

    if (!organization) {
        await Organization.create({ orgId: 224 });
    }
}