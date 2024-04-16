import { Employee, Organization } from "@sql-models";
import bcrypt from 'bcryptjs';

export const createAdminUser = async () => {
    try {
        const adminUser = await Employee.findOne({ where: { name: 'admin' } });

        if (!adminUser) {
            const bcryptedPassword = await bcrypt.hash('admin', 12);
            const organization = await Organization.findOne();

            if (!organization) {
                throw new Error("No organization found. Cannot assign admin to an organization.");
            }

            await Employee.create({
                name: 'admin',
                employeeId: 123,
                password: bcryptedPassword,
                role: 'admin',
                organizationId: organization.id || null
            });
        }
    } catch (error) {
        console.error("Failed to create admin user:", error);
    }
};