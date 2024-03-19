const validationResolver = async (values: any, schema: any) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {
      values,
      errors: {},
    };
  } catch (validationErrors: any) {
    const errors: any = {};

    validationErrors.inner.forEach(
      (err: { path: string | number; message: any }) => {
        errors[err.path] = {
          message: err.message,
          type: "validation",
        };
      }
    );

    return {
      values,
      errors,
    };
  }
};

export default validationResolver;
