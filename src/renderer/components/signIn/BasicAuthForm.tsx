import { Button, Form, Input } from 'antd'
import { useForm } from 'react-hook-form'
import { BasicAuth } from '@renderer/atoms/auth'
import HookFormItem from '@renderer/components/HookFormItem'

export interface Props {
  onValid: (values: BasicAuth) => void
}

function BasicAuthForm({ onValid }: Props) {
  const form = useForm<BasicAuth>()
  return (
    <Form
      size="large"
      initialValues={{ remember: true }}
      autoComplete="off"
      layout="vertical"
      onFinish={() => form.handleSubmit(onValid)()}
    >
      <HookFormItem
        form={form}
        name="id"
        label="ID"
        required
        render={({ field }) => <Input {...field} />}
      />
      <HookFormItem
        form={form}
        name="password"
        label="비밀번호"
        required
        render={({ field }) => <Input.Password {...field} />}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit">
          다음
        </Button>
      </Form.Item>
    </Form>
  )
}

export default BasicAuthForm
