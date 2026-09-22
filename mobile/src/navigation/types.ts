export type Role = 'student' | 'parent'

export type RootStackParamList = {
  Login: undefined
  StudentTabs: undefined
  ParentTabs: undefined
  InterestsList: undefined
  InterestDetail: { id: string }
  StrengthsList: undefined
  StrengthDetail: { id: string }
  SkillsList: undefined
  SkillDetail: { id: string }
  CareersList: undefined
  CareerDetail: { id: string }
}

export type StudentTabParamList = {
  Dashboard: undefined
  Explore: undefined
  Progress: undefined
}

export type ParentTabParamList = {
  Dashboard: undefined
  Progress: undefined
}
