module.exports = function (sequelize, DataTypes) {
    const appointment = sequelize.define('appointment', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "id"
        },
        patientName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: null,
            field: "patientName"
        },
        email: {
            type: DataTypes.STRING(20000),
            allowNull: false,
            validate: {
                isEmail: true
            },
            comment: null,
            field: "email"
        },
        mobileno: {
            type: DataTypes.STRING(10),
            allowNull: false,
            length: 10,
            comment: null,
            field: "mobileno"
        },
        age: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            comment: null,
            field: "age"
        },
        height: {
            type: DataTypes.STRING(6),
            allowNull: false,
            comment: null,
            field: "height"
        },
        disease: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: null,
            field: "disease"
        },
        clinicBranch: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: null,
            field: "clinicBranch"
        },
        clinicShift: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: null,
            field: "clinicShift"
        },
        doctorID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: "doctorID"
        },
        appointmentDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "appointmentDate"
        },
        appointmentNo: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: "appointmentNo"
        },
        appointmentStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: null,
            field: "appointmentStatus"
        },
        validTill: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "validTill"
        }

    });
return appointment;
}