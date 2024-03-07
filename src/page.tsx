// import { Box, Button } from '@mui/material';
// import { Controller, useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import AuthLayout from '../AuthLayout';
// import AppTextField from '@/src/core/components/app-textfield/AppTextField';
// import AppPasswordTextField from '@/src/core/components/app-textfield/AppPasswordTextField';
// import { FormFieldContainer, FormFieldWrapper } from '@/src/shared/components/form-helpers/FormWrappers';
// import { PromptTypography, ReturnToLoginLink, TitleTypography } from '../shared/styledComponent';
// import { BACK_ICON } from '@/src/configs/imagePaths';
// import validationResolver from '@/src/utils/validation-resolver';
// import { Company, defaultValues } from '@/src/models/company';
// import { confirmPasswordSchema, emailSchema, passwordSchema } from '../shared/validationSchemas';

// const validationSchema = yup.object().shape({
//   companyName: yup.string().required().label('Compnay Name'),
//   userName: yup.string().required().label('User Name'),
//   email: emailSchema,
//   newPassword: passwordSchema,
//   confirmPassword: confirmPasswordSchema('newPassword'),
// });

// const RegisterOrganization = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Company>({
//     defaultValues: defaultValues,
//     resolver: values => validationResolver(values, validationSchema),
//   });

//   const renderAppPasswordTextField = (name: keyof Company, label: string) => {
//     return (
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <AppPasswordTextField
//             label={label}
//             error={Boolean(errors[name])}
//             helperText={errors[name]?.message}
//             {...field}
//           />
//         )}
//       />
//     );
//   };

//   const renderAppTextField = (name: keyof Company, label: string) => {
//     return (
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <AppTextField label={label} error={Boolean(errors[name])} helperText={errors[name]?.message} {...field} />
//         )}
//       />
//     );
//   };

//   const onSubmit = (value: Company) => {
//     console.log(value);
//   };
//   return (
//     <AuthLayout>
//       <FormFieldContainer gap={3.5} container width='550px' component='form' onSubmit={handleSubmit(onSubmit)}>
//         <Box>
//           <TitleTypography>Registration</TitleTypography>
//           <PromptTypography>Enter Your Account Details</PromptTypography>
//         </Box>
//         <FormFieldWrapper item xs={12}>
//           {renderAppTextField('companyName', 'Company Name')}
//         </FormFieldWrapper>
//         <FormFieldWrapper item container xs={12} spacing={2}>
//           <FormFieldWrapper item xs={6}>
//             {renderAppTextField('email', 'Email')}
//           </FormFieldWrapper>
//           <FormFieldWrapper item xs={6}>
//             {renderAppTextField('userName', 'User Name')}
//           </FormFieldWrapper>
//         </FormFieldWrapper>
//         <FormFieldWrapper item container xs={12} spacing={2}>
//           <FormFieldWrapper item xs={6}>
//             {renderAppPasswordTextField('newPassword', 'New Password')}
//           </FormFieldWrapper>
//           <FormFieldWrapper item xs={6}>
//             {renderAppPasswordTextField('confirmPassword', 'Confirm Password')}
//           </FormFieldWrapper>
//         </FormFieldWrapper>
//         <Button variant='contained' type='submit'>
//           Save
//         </Button>
//         <ReturnToLoginLink to={'/login'}>
//           <img src={BACK_ICON} />   Back to login
//         </ReturnToLoginLink>
//       </FormFieldContainer>
//     </AuthLayout>
//   );
// };

// export default RegisterOrganization;