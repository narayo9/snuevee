/* eslint-disable @typescript-eslint/ban-types */
import { ErrorMessage } from '@hookform/error-message'
import { Form } from 'antd'
import React, { ComponentProps } from 'react'
import { Controller } from 'react-hook-form'
import type {
  ControllerProps,
  FieldValues,
  UseFormReturn,
  FieldPath,
  UseControllerProps,
} from 'react-hook-form'

export interface Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends ComponentProps<typeof Form.Item> {
  form: UseFormReturn<TFieldValues, object>
  name: TName
  render: Omit<
    ControllerProps<TFieldValues, TName>,
    'control' | 'name'
  >['render']
  controllerProps?: Omit<
    UseControllerProps<TFieldValues, TName>,
    'control' | 'name'
  >
  required?: boolean
  arrayRequired?: boolean
  children?: React.ReactNode
}

function HookFormItem<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  form,
  name,
  children,
  render,
  required = false,
  arrayRequired = false,
  controllerProps = {},
  validateStatus,
  help,
  ...props
}: Props<TFieldValues, TName>) {
  const { invalid } = form.getFieldState(name)
  return (
    <Form.Item
      validateStatus={invalid ? 'error' : validateStatus}
      help={
        invalid ? (
          <ErrorMessage
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            errors={form.formState.errors as Record<string, any>}
            name={name as string}
          />
        ) : (
          help
        )
      }
      required={required || arrayRequired}
      {...props}
    >
      <Controller
        control={form.control}
        name={name}
        rules={{
          required: required
            ? '이 값은 필수 항목입니다.'
            : undefined,
          validate: arrayRequired
            ? {
                arrayRequired: (v) =>
                  (v && Array.isArray(v) && v.length > 0) ||
                  '하나 이상의 값을 선택해주세요.',
              }
            : undefined,
        }}
        {...controllerProps}
        render={render}
      />
      {children}
    </Form.Item>
  )
}

export default HookFormItem